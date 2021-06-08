import React, { useState } from 'react'; // eslint-disable-line
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import { fetchQuestions } from '../store/questionsReducer';

const Page = () => {
  const [questions, loading, error] = useSelector((state: RootStateOrAny) => [
    state.userReducer.users,
    state.userReducer.loading,
    state.userReducer.error,
  ]);
  const [questions2, loading2, error2, questions2Type] = useSelector((state: RootStateOrAny) => [
    state.questionsReducer.questions,
    state.questionsReducer.loading,
    state.questionsReducer.error,
    state.questionsReducer.type,
  ]);

  const dispatch = useDispatch();

  const handleClickName = (data: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(fetchQuestions({ value: data.currentTarget.dataset.userid, typeUrl: 'ids' }));
  };

  const handleClickTag = (data: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(fetchQuestions({ value: data.currentTarget.dataset.tag, typeUrl: 'tags' }));
  };

  type TableStateType = {
    [key: string]: (string)[];
  };
  const initTabState = { name: ['owner.display_name', 'empt'], title: ['title', 'empt'] };
  const [tabState, setTabState] = useState<TableStateType>(initTabState);
  // { name: ['owner.display_name', null], title: ['title', null] }
  const handleSort = (key: string, sortWay: string) => {
    const field = tabState[key][0];
    setTabState({ ...initTabState, [key]: [field, sortWay] });
  };

  const sortedQuestions = React.useMemo(() => {
    const colState = (Object.values(tabState).find((el) => el[1] !== 'empt') || []);
    const st = colState[0];
    const sortWay = colState[1];
    const arr = (st || 'title').split('.').reverse();
    const sortedField = arr[0];
    if (!sortWay) { return questions; }
    return questions.slice().sort((a: any, b: any) => {
      const aa = arr[1] ? a[arr[1]] : a; const bb = arr[1] ? b[arr[1]] : b;
      if (aa[sortedField].toLowerCase() < bb[sortedField].toLowerCase()) {
        return sortWay === 'az' ? -1 : 1;
      }
      if (aa[sortedField].toLowerCase() > bb[sortedField].toLowerCase()) {
        return sortWay === 'az' ? 1 : -1;
      }
      return 0;
    });
  }, [questions, tabState]);

  interface Person {
    change: string;
    text: string;
 }

  interface SortIconType {
    [key: string]: Person;
 }

  const sortIcon: SortIconType = {
    empt: { change: 'az', text: '-' },
    az: { change: 'za', text: '(a-z)' },
    za: { change: 'az', text: '(z-a)' },
  };

  const errors = (err: any) => {
    if (!err?.error_id) return false;
    return (
      <div>
        <div className="error">
          <p>{`ОШИБКА ${err.error_id}`}</p>
          <p>{err.error_message}</p>
        </div>
      </div>
    );
  };
  const errorsTabMain = errors(error);
  const errorsTabView = errors(error2);

  if ((!questions && !loading) || errorsTabMain) {
    return (
      <Link to="search/">Перейти на страницу поиска</Link>
    );
  }

  return (
    <div className="layout">
      <div className={`pageContent ${(questions && questions2) ? '' : 'disabled_'}`}>
        <div className="pageContent__item">
          {errorsTabMain}
          {loading && <div className="loading" />}
          {questions && (
            <table className="table">
              <caption>Результаты поиска</caption>
              <tr>
                <th>
                  Автор вопроса
                  <span
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => { console.log('12'); }}
                    onClick={() => {
                      const key = sortIcon[tabState.name[1]].change;
                      handleSort('name', key);
                    }}
                  >
                    {sortIcon[tabState.name[1]].text}
                  </span>
                </th>
                <th>
                  Тема
                  <span
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => { console.log('123'); }}
                    onClick={() => {
                      const key = sortIcon[tabState.title[1]].change;
                      handleSort('title', key);
                    }}
                  >
                    {sortIcon[tabState.title[1]].text}
                  </span>
                </th>
                <th>Количество ответов</th>
                <th>Теги</th>
              </tr>
              <tbody>
                {sortedQuestions && sortedQuestions?.map((question: any) => (
                  <tr key={question.question_id}>
                    <td data-label="Автор вопроса">
                      <button onClick={handleClickName} type="button" data-name={question.owner.display_name} data-userid={question.owner.user_id}>
                        {question.owner.display_name}
                      </button>
                    </td>
                    <td data-label="Тема"><Link to={`info/${question.question_id}`}>{question.title}</Link></td>
                    <td data-label="Количество ответов"><Link to={`info/${question.question_id}`}>{question.answer_count}</Link></td>
                    <td data-label="Теги">
                      {question.tags?.map((tag: any) => (
                        <button key={tag} onClick={handleClickTag} type="button" data-tag={tag}>
                          {tag}
                        </button>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {(questions2 || loading2 || errorsTabView) && (
          <div className="pageContent__item">
            {errorsTabView}
            {loading2 && <div className="loading" />}
            {questions2 && (
              <table className="table">
                <caption>{`Результаты поиска ${questions2Type}`}</caption>
                <tbody>
                  <tr>
                    <th>Автор вопроса</th>
                    <th>Тема</th>
                    <th>Количество ответов</th>
                    <th>Теги</th>
                  </tr>
                  {questions2.map((question: any) => (
                    <tr key={question.question_id}>
                      <td data-label="Автор вопроса">{question.owner.display_name}</td>
                      <td data-label="Тема">{question.title}</td>
                      <td data-label="Количество ответов">{question.answer_count}</td>
                      <td data-label="Теги">{question.tags?.map((item: any) => (<span key={item}>{`${item} `}</span>)) }</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
