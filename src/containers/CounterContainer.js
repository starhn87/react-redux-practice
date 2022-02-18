import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import useActions from '../lib/useActions';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);

  const [onIncrease, onDecrease] = useActions([increase, decrease], []);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   //   increase: () => {
//   //     dispatch(increase());
//   //   },
//   //   decrease: () => {
//   //     dispatch(decrease());
//   //   },

//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default CounterContainer;
