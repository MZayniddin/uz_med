// COMPONENTS
import Description from "../components/description/Description";
import Table from "../components/table/Table";

// DATA
import data from "../data/development.json";

export default function Development() {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table data={data[0].data_table} />
        </main>
    );
}
