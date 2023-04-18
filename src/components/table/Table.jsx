import "./Table.scss";

const Table = () => {
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
                    <tbody></tbody>
                </table>
            </div>
        </section>
    );
};

export default Table;
