/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react'
import {ChangeEvent, useCallback, useState} from 'react'
import {Flex, Radio, Stack} from '../../src/primitives'

const meta: Meta<typeof Radio> = {
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
  component: Radio,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (props) => <Radio {...props} />,
}

export const Controlled: Story = {
  parameters: {
    controls: {
      include: ['customValidity', 'disabled'],
    },
  },
  render: (props) => {
    const [value, setValue] = useState('a')

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }, [])

    return (
      <Flex gap={3}>
        <Radio {...props} checked={value === 'a'} name="foo" onChange={handleChange} value="a" />
        <Radio {...props} checked={value === 'b'} name="foo" onChange={handleChange} value="b" />
        <Radio {...props} checked={value === 'c'} name="foo" onChange={handleChange} value="c" />
      </Flex>
    )
  },
}

export const InputStates: Story = {
  parameters: {
    controls: {
      include: ['customValidity'],
    },
  },
  render: (props) => {
    return (
      <Stack space={3}>
        <Flex gap={3}>
          <Radio {...props} />
          <Radio {...props} defaultChecked />
        </Flex>
        <Flex gap={3}>
          <Radio {...props} disabled />
          <Radio {...props} defaultChecked disabled />
        </Flex>
      </Stack>
    )
  },
}
