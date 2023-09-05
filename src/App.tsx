import { App as AppContext } from 'antd'
import PageMain from './view/pageMain'
import PageNav from './view/pageNav'

function App() {
  return (
    <>
      <AppContext>
        <PageNav></PageNav>
        <PageMain></PageMain>
      </AppContext>
    </>
  )
}

export default App
