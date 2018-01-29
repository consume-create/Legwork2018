<template>
	<a :href="link_url" class="link"><slot></slot></a>
</template>

<script>
export default {
	name: 'link-comp',
  props: [
    'link_url'
    ]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.link
  color: $color-link
  font-weight: $bold
  text-decoration: none
  font-size: 1em

  &.link-arrow
    padding-right: 40px
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAxMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJVSS1LSVQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDcuMDAwMDAwLCAtNjE4MS4wMDAwMDApIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjA5LjAwMDAwMCwgNjE4My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNy4wMDAwMDApIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNjg0OTM1OSwwIEwwLjAzMzEwNTUxOSwwIiBpZD0iTGluZS1Db3B5LTMwIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtMyIgcG9pbnRzPSIxNCAwIDIxIDcgMTQuMTM0NTg5NCAxMy44NjU0MTA2Ij48L3BvbHlsaW5lPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')
    background-position: center right
    background-repeat: no-repeat

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