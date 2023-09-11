import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  parameters: {
    layout: 'fullscreen'
  },
  component: Main
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
