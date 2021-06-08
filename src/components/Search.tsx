import React, { useState } from 'react'; // eslint-disable-line
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchUsers } from '../store/userReducer';
import { app } from '../logic';

const Search = () => {
  const [questions, loading, error, text] = useSelector((state: RootStateOrAny) => [
    state.userReducer.users,
    state.userReducer.loading,
    state.userReducer.error,
    state.userReducer.text,
  ]);
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState(text || 'how to sort js object');

  const onChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (searchText) {
      dispatch(fetchUsers({ q: searchText }));
      history.push('/result');
    }
  };

  return (
    <div className="layout">
      {loading ? <div className="loading" /> : (
        <form className="searchBlock">
          <input className="searchBlock__input" value={searchText} onChange={onChange} />
          <button className="searchBlock__button" type="submit" onClick={handleSearch}>{app.ui.searchButton.ru}</button>
        </form>
      )}
      {error?.error_id && (
        <div>
          <div className="error">
            <p>{`ОШИБКА ${error.error_id}`}</p>
            <p>{error.error_message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
