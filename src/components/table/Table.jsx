import { v4 as uuidv4 } from "uuid";

// STYLE
import "./Table.scss";

const Table = ({ data }) => {
  return (
    <section className="table__wrapper">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Task No</th>
              <th rowSpan={2}>Task Name</th>
              <th rowSpan={2}>Description</th>
              <th colSpan={2}>Participants</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({
                task_no,
                task_name,
                description,
                participant_name,
                participant_role,
              }) => (
                <tr key={uuidv4()}>
                  <td className="col_task_no text">{task_no}</td>
                  <td className="text">{task_name}</td>
                  <td className="col_desc text">{description}</td>
                  <td className="col_participant text">{participant_name}</td>
                  <td className="col_participant text">{participant_role}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
