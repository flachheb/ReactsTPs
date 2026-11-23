export default function Listing({vegitals}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>color</th>
                    <th>category</th>
                </tr>
            </thead>
            <tbody>
                {
                    vegitals.map(
                        (v, index) => (
                            <tr key={index}>
                                <td>{v.name}</td>
                                <td>{v.color}</td>
                                <td>{v.type}</td> 
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}