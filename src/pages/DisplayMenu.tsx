import { DisplayFoods } from 'components/DisplayFoods';
import { Header } from '../components/Header';
import { SearchInput } from '../components/SearchInput';

export function DisplayMenu() {
  return (
    <>
      <Header />
      <SearchInput />
      <div>
        <DisplayFoods />
      </div>
    </>
  );
}
