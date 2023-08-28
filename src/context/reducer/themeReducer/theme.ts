export interface IThemeColorType {
  primary: string
  accent: string
  background: string
  textColor: string
  secondary: string
}
export const themeColor: IThemeColorType[] = [
  {
    primary: '#FFC107',
    accent: '#FF9800',
    background: '#F5F5F5',
    textColor: '#212121',
    secondary: '#FFC107',
  },
  {
    primary: '#264653',
    accent: '#2a9d8f',
    background: '#e9c46a',
    textColor: '#f4a261',
    secondary: '#e76f51',
  },
  {
    primary: '#000000',
    accent: '#14213d',
    background: '#fca311',
    textColor: '#e5e5e5',
    secondary: '#ffffff',
  },
  {
    primary: '#780000',
    accent: '#c1121f',
    background: '#fdf0d5',
    textColor: '#003049',
    secondary: '#669bbc',
  },
  {
    primary: '#00296b',
    accent: '#003f88',
    background: '#00509d',
    textColor: '#fdc500',
    secondary: '#ffd500',
  },
  {
    primary: '#390099',
    accent: '#9e0059',
    background: '#ff0054',
    textColor: '#ff5400',
    secondary: '#ffbd00',
  },
]

export interface IThemeColorAction {
  type: 'CHANGETHEMECOLOR'
  payload: any
}

export function themeReducer(state: IThemeColorType, action: IThemeColorAction): IThemeColorType {
  switch (action.type) {
    case 'CHANGETHEMECOLOR':
      return action.payload
    default:
      return state
  }
}
