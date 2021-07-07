const Warning = () => {

    return(
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Allow geolocation permissions</h4>
            <p>To use this service it is necessary to activate the geolocation permissions.</p>
            <hr />
            <p className="mb-0">Please click on "allow" button. Reload the page if necessary</p>
        </div>
    )
}

export default Warning;