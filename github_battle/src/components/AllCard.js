import Card from "./Card";

function AllCard(props) {
    let allData = props.data;
    console.log(allData);

    return (
        <section className="flex flex-wrap justify-center w-full border-2 m-5 p-5">
            {
                allData.map((data, i) => {
                    return <Card
                        {...data} key={data.id} score={i + 1} darkMode={props.darkMode}
                    />
                })
            }
        </section>
    )
}
export default AllCard;