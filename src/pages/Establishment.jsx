// COMPONENTS
import Description from "../components/description/Description";
import Table from "../components/table/Table";

// DATA
import data from "../data/establishment.json";

export default function Establishment() {
    return (
        <main>
            <Description data={data[0].data_page} />
            <Table data={data[0].data_table} />
        </main>
    );
}
