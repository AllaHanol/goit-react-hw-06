import css from './SearchBox.module.css';
import {useId} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, setFilterValue } from '../../redux/filtersSlice';
const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(filterValue);
  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
  };
  return (
  
    <input className={css.search}
      id={searchInputId} type="text" value={filterName} onChange={(e) => handleFilter(e.target.value) } placeholder="Search contacts" />
  );
};

export default SearchBox;
