import { v4 as uuidv4 } from "uuid";

// DATA
import data from "../../data/management.json";

// STYLE
import "./Table.scss";

const Table = () => {
    console.log();
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
                        {data[0].data_table.map(
                            ({
                                task_no,
                                task_name,
                                description,
                                participant_name,
                                participant_role,
                            }) => (
                                <tr key={uuidv4()}>
                                    <td className="col_task_no">{task_no}</td>
                                    <td>{task_name}</td>
                                    <td className="col_desc">{description}</td>
                                    <td className="col_participant">
                                        {participant_name}
                                    </td>
                                    <td className="col_participant">
                                        {participant_role}
                                    </td>
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
