<template>
  <a :href="link" class="link">{{text}}</a>
</template>

<script>
export default {
  name: 'link-comp',
  props: [
    'link',
    'text'
    ]
}
</script>

<style lang='sass'>
@import "src/styles/global"

.link
  color: $color-link
  font-weight: $bold
  text-decoration: none
  font-size: 1em
  padding-right: 15px
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCA5IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VHJpYW5nbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVUktS0lUIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjg3LjAwMDAwMCwgLTYyODUuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgcG9pbnRzPSI2OTYgNjI5MS44ODIzNSA2ODcgNjI5OC43NjQ3MSA2ODcgNjI4NSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')
  background-position: center right
  background-repeat: no-repeat
  background-size: 4%
  height: 30px

  &.link-play
    &:after
      content: ''
      display: inline-block
      padding-left: 13px
      background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjE0cHgiIHZpZXdCb3g9IjAgMCA5IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VHJpYW5nbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVUktS0lUIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjg3LjAwMDAwMCwgLTYyODUuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgcG9pbnRzPSI2OTYgNjI5MS44ODIzNSA2ODcgNjI5OC43NjQ3MSA2ODcgNjI4NSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')
      background-position: center right
      background-repeat: no-repeat
      background-size: contain
      height: 11px
      width: 7px


</style>