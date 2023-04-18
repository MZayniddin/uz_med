
// COMPONENTS
import Description from "../components/description/Description";
import Table from "../components/table/Table";

// DATA
import data from "../data/management.json";

const Management = () => {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table data={data[0].data_table} />
        </main>
    );
};

export default Management;
