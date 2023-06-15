const SubNav = ({ componentsName }) => {
  return (
    <div className="pageTitle" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h1 className="page-heading">{componentsName}</h1>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="breadCrumb">
              <a href="#.">Home</a> / <span>{componentsName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
