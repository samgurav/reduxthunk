import React, { useEffect } from "react";
import { getData, photos } from "../reducer/datareducer";
import { useDispatch, useSelector } from "react-redux";
function ReduxThunk() {
  const dispatch = useDispatch();
  const curPhotos = useSelector(photos);
  console.log(curPhotos);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <div>
        <h1>Gallery Photos</h1>
        <p>this is a photo gallery</p>
        <hr />
        <div>
          <table className="table m-5">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">title</th>
                <th scope="col">body</th>
                <th scope="col">total</th>
              </tr>
            </thead>
            <tbody>
              {curPhotos &&
                curPhotos.map((data, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>{data.userId}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReduxThunk;
