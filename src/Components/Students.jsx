export default function Students() {
    const fullName = "Mohd Naved Alam";
    const programmingExperience = 4;
    return (
      <div className="container p-4">
        <div className='row'>
          Students Enrolled
        </div>
        <div className='row border'>
          <div className='col-2'>
            <img
              src={`https://ui-avatars.com/api/?name=${fullName}`}
              className='w-50'>
            </img>
          </div>
          <div className='col-10'>
            {fullName}
            <br />
            Programming Experience - {programmingExperience} years.
          </div>
        </div>
      </div>
    );
  }