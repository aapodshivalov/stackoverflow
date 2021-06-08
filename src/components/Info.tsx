import React, { useEffect } from 'react'; // eslint-disable-line
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  useParams,
} from 'react-router-dom';
import { fetchInfo } from '../store/infoReducer';

const Info = () => { // eslint-disable-line
  const { qid } = useParams<{ qid: string }>();
  const [stateInfo, loading, error] = useSelector((state: RootStateOrAny) => [
    state.infoReducer.info,
    state.infoReducer.loading,
    state.infoReducer.error,
  ]);
  const dispatch = useDispatch();
  useEffect(
    () => {
      if (!stateInfo[qid]) {
        dispatch(fetchInfo({ qid }));
      }
    },
    [],
  );

  if (loading) {
    return <div className="loading" />;
  }
  if (!qid) {
    return <div>Нет номера вопроса в урле</div>;
  }
  if (error?.error_id) {
    return (
      <div>
        <div className="error">
          <p>{`ОШИБКА ${error.error_id}`}</p>
          <p>{error.error_message}</p>
        </div>
      </div>
    );
  }

  const len = stateInfo[qid]?.length;
  return (
    <div className="layout">
      <div className="info">
        <div className="info__top">
          <h2>Список ответов</h2>
          {len === 0 && <h3>Нет ответов</h3>}
        </div>
        <div className="info__answers">
          {stateInfo[qid]
            && stateInfo[qid].map((item: any, i: number) => (
              <div key={item.answer_id} className="info__answ">
                <h3>{`${i + 1}/${len}`}</h3>
                {item.is_accepted ? <div className="info__answ__check" /> : false}
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
