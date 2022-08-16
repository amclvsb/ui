import {
  Middleware,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  size as sizeMiddleware,
  RootBoundary,
} from '@floating-ui/react-dom'
import {
  cloneElement,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {useForwardedRef, useArrayProp, useElementSize} from '../../hooks'
import {ThemeColorSchemeKey, useTheme} from '../../theme'
import {BoxOverflow, CardTone, Placement, PopoverMargins} from '../../types'
import {LayerProps, LayerProvider, Portal, useBoundaryElement} from '../../utils'
import {ResponsiveRadiusProps, ResponsiveShadowProps, ResponsiveWidthProps} from '../types'
import {PopoverCard} from './popoverCard'

/**
 * @public
 */
export interface PopoverProps
  extends Omit<LayerProps, 'as'>,
    ResponsiveRadiusProps,
    ResponsiveShadowProps,
    ResponsiveWidthProps {
  /**
   * @beta
   */
  __unstable_margins?: PopoverMargins
  /** @deprecated Use `fallbackPlacements` instead. */
  allowedAutoPlacements?: Placement[]
  arrow?: boolean
  boundaryElement?: HTMLElement | null
  children?: React.ReactElement
  constrainSize?: boolean
  content?: React.ReactNode
  disabled?: boolean
  fallbackPlacements?: Placement[]
  open?: boolean
  overflow?: BoxOverflow
  padding?: number | number[]
  placement?: Placement
  portal?: boolean | string
  preventOverflow?: boolean
  referenceElement?: HTMLElement | null
  matchReferenceWidth?: boolean
  scheme?: ThemeColorSchemeKey
  /** @deprecated No longer supported. */
  tether?: boolean
  /** @deprecated No longer supported. */
  tetherOffset?: number | ((...args: any[]) => number)
  tone?: CardTone
}

function size(scope: {
  boundaryElement: HTMLElement | null
  constrainSize: boolean
  matchReferenceWidth: boolean | undefined
  setAvailableWidth: (v: number) => void
  setAvailableHeight: (v: number) => void
  setReferenceWidth: (v: number) => void
}) {
  return sizeMiddleware({
    apply(args) {
      if (scope.constrainSize) {
        scope.setAvailableWidth(args.availableWidth)
        scope.setAvailableHeight(args.availableHeight)
      }

      if (scope.matchReferenceWidth) {
        scope.setReferenceWidth(args.rects.reference.width)
      }
    },
    boundary: scope.boundaryElement || undefined,
  })
}

/** @public */
export const Popover = memo(
  forwardRef(function Popover(
    props: PopoverProps &
      Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'children' | 'content' | 'width'>,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement {
    const theme = useTheme()
    const boundaryElementContext = useBoundaryElement()

    const {
      __unstable_margins: margins,
      allowedAutoPlacements,
      arrow: arrowProp = true,
      boundaryElement = boundaryElementContext.element,
      children: childProp,
      constrainSize = false,
      content,
      disabled,
      fallbackPlacements,
      matchReferenceWidth: matchReferenceWidthProp,
      open,
      overflow = props.constrainSize ? 'auto' : undefined,
      padding: paddingProp,
      placement: placementProp = 'bottom',
      portal,
      preventOverflow = true,
      radius: radiusProp = 3,
      referenceElement,
      scheme,
      shadow: shadowProp = 3,
      tether,
      tetherOffset,
      tone = 'inherit',
      width: widthProp = undefined,
      zOffset: zOffsetProp = theme.sanity.layer?.popover.zOffset,
      ...restProps
    } = props
    const boundarySize = useElementSize(boundaryElement)?.border
    const padding = useArrayProp(paddingProp)
    const radius = useArrayProp(radiusProp)
    const shadow = useArrayProp(shadowProp)
    const width = useArrayProp(widthProp)
    const zOffset = useArrayProp(zOffsetProp)
    const [availableWidth, setAvailableWidth] = useState<number | undefined>(undefined)
    const [availableHeight, setAvailableHeight] = useState<number | undefined>(undefined)
    const [referenceWidth, setReferenceWidth] = useState<number | undefined>(undefined)
    const forwardedRef = useForwardedRef(ref)
    const arrowRef = useRef<HTMLDivElement | null>(null)
    const rootBoundary: RootBoundary = 'viewport'

    const middleware = useMemo(() => {
      const ret: Middleware[] = []

      // Flip the floating element when leaving the boundary box
      if (constrainSize || preventOverflow) {
        ret.push(
          flip({
            boundary: boundaryElement || undefined,
            fallbackPlacements,
            padding: 8,
            rootBoundary,
          })
        )
      }

      // Track sizes
      ret.push(
        size({
          boundaryElement,
          constrainSize,
          matchReferenceWidth: matchReferenceWidthProp,
          setAvailableHeight,
          setAvailableWidth,
          setReferenceWidth,
        })
      )

      // Define distance between reference and floating element
      ret.push(offset({mainAxis: arrowProp ? 4 : 0}))

      // Shift the popover so its sits with the boundary eleement
      if (preventOverflow) {
        ret.push(
          shift({
            boundary: boundaryElement || undefined,
            rootBoundary,
            padding: 8,
          })
        )
      }

      // Place arrow
      if (arrowProp) {
        ret.push(arrow({element: arrowRef, padding: 4}))
      }

      return ret
    }, [
      arrowProp,
      boundaryElement,
      constrainSize,
      fallbackPlacements,
      matchReferenceWidthProp,
      preventOverflow,
    ])

    const {x, y, placement, reference, floating, middlewareData, strategy} = useFloating({
      middleware,
      placement: placementProp,
      whileElementsMounted: autoUpdate,
    })

    const arrowX = middlewareData.arrow?.x
    const arrowY = middlewareData.arrow?.y

    const setArrow = useCallback((arrowEl: HTMLDivElement | null) => {
      arrowRef.current = arrowEl
    }, [])

    const setFloating = useCallback(
      (node: HTMLDivElement | null) => {
        forwardedRef.current = node
        floating(node)
      },
      [floating, forwardedRef]
    )

    const setReference = useCallback(
      (node: HTMLElement | null) => {
        reference(node)

        const childRef = (childProp as any)?.ref

        if (typeof childRef === 'function') {
          childRef(node)
        } else if (childRef) {
          childRef.current = node
        }
      },
      [childProp, reference]
    )

    const child = useMemo(() => {
      if (!childProp || referenceElement) return null

      return cloneElement(childProp, {ref: setReference})
    }, [childProp, referenceElement, setReference])

    useEffect(() => {
      if (referenceElement) reference(referenceElement)
    }, [reference, referenceElement])

    if (disabled) {
      return childProp || <></>
    }

    const popover = (
      <LayerProvider zOffset={zOffset}>
        <PopoverCard
          {...restProps}
          __unstable_margins={margins}
          arrow={arrowProp}
          arrowRef={setArrow}
          arrowX={arrowX}
          arrowY={arrowY}
          availableWidth={constrainSize ? availableWidth : undefined}
          availableHeight={constrainSize ? availableHeight : undefined}
          boundaryWidth={boundarySize?.width}
          overflow={overflow}
          padding={padding}
          placement={placement}
          radius={radius}
          ref={setFloating}
          referenceWidth={matchReferenceWidthProp ? referenceWidth : undefined}
          scheme={scheme}
          shadow={shadow}
          strategy={strategy}
          tone={tone}
          x={x}
          y={y}
          width={width}
        >
          {content}
        </PopoverCard>
      </LayerProvider>
    )

    return (
      <>
        {/* the popover */}
        {open && (
          <>
            {portal ? (
              <Portal __unstable_name={typeof portal === 'string' ? portal : undefined}>
                {popover}
              </Portal>
            ) : (
              popover
            )}
          </>
        )}

        {/* the referred element */}
        {child}
      </>
    )
  })
)

Popover.displayName = 'Popover'
