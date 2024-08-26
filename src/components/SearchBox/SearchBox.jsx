import css from './SearchBox.module.css';
import {useId} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, setFilterValue } from '../../redux/filtersSlice';
const SearchBox = () => {
  const searchInput = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(filterValue);
  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
  };
  return (
  
    <input className={css.search}
      id={searchInput} type="text" value={filterName} onChange={handleFilter} placeholder="Search contacts" />
  );
};

export default SearchBox;
