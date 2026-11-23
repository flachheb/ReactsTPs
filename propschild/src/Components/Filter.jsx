export default function Filter({rechercher}) {

    function handleFilter(e) {
        rechercher(e.target.value);
    }

    return (
        <div className="wrap-filter">
            <label htmlFor="search">Rechercher</label>
            <input type="search"  id="search" onChange={ handleFilter } />
        </div>
    )
}