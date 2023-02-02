import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsAsync } from '../redux/greetingsRedux/greetings';

const Greeting = () => {

  const data = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsAsync());
  }, []);

  return (
    <div>
      <div class="card mt-5 me-5 ms-5">
        <div class="card-body">
          <h2>{ data.greetings.message }</h2>
        </div>
      </div>
    </div>
  )
}

export default Greeting;