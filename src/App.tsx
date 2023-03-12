
import { Search } from './components/search/Search'
import { UserCart } from './components/userCart/UserCart'

import { LayoutComponent } from './layout/LayoutComponent'
import { useAppSelector } from './store/Hooks/hooks';

function App() {
  const findUser = useAppSelector(state => state.userData.findUser);
  return (
    <div className="App">
      <LayoutComponent>
        <Search />
        {findUser === 'FindUser' ? <UserCart /> : null}
      </LayoutComponent>
    </div>
  )
}

export default App
