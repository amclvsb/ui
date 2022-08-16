import {Placement, PopoverMargins} from '../../types'

/**
 * @internal
 */
export const AUTOCOMPLETE_LISTBOX_IGNORE_KEYS = [
  'Control',
  'Shift',
  'Alt',
  'Enter',
  'Home',
  'End',
  'PageUp',
  'PageDown',
  'Meta',
  'Tab',
  'CapsLock',
]

/**
 * @internal
 */
export const AUTOCOMPLETE_POPOVER_MARGINS: PopoverMargins = [0, 1, 0, 0]

/**
 * @internal
 */
export const AUTOCOMPLETE_POPOVER_PLACEMENT: Placement = 'bottom'

/**
 * @internal
 */
export const AUTOCOMPLETE_POPOVER_FALLBACK_PLACEMENTS: Placement[] = ['bottom', 'top']
