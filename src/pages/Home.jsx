import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../utils/getliveClasses";
import Loader from "../components/Loader";
import { Trim } from "../utils/Trim";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import Details from "../components/Details";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    title:'',
    description:'',
    link:'',
  });
  const handleOpen = (id) => {
    const classItem = data.find(item => item.id === id);
    setSelectedClass({
      title: classItem.title,
      description: classItem.description_web,
      link:classItem.host_link
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedClass(null);
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });
console.log(selectedClass)
  if (isPending) {
    return (
      <main className="classlist-container">
        <h2 style={{ fontSize: '30px', color: '#8A2BE2' }}>Live Classes</h2>
        <div className="cards-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <Loader key={index} />
          ))}
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="classlist-container">
        <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>{error.message || 'Error fetching data'}</h2>
      </main>
    );
  }

  return (
    <main className="classlist-container">
      <h2 style={{ fontSize: '30px', color: '#8A2BE2' }}>Live Classes</h2>
      <div className="cards-container">
        {
          data?.map((classItem) => (
            <section key={classItem.id} className="class-card">
              <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{classItem.category.title}</p>
              <img style={{ borderRadius: '12px' }} src={classItem.image} alt="class-image" height={'60%'} width={'95%'} />
              <div style={{ height: '100px', width: '95%', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '17px', fontWeight: 'bold' }}>{Trim(classItem.title, 33)}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: '15px', color: '#A9A9A9' }}>{classItem.start_datetime}</p>
                  <p style={{ fontWeight: 'bold' }}>By {Trim(classItem.teachers.name, 12)}..</p>
                </div>
              </div>
              <div className="details">
                <button onClick={() => handleOpen(classItem.id)} className="details-button">
                  View Details <span><ArrowForwardIcon fontSize='small' /></span>
                </button>
              </div>
            </section>
          ))
        }
      </div>
      {selectedClass && (
        <Details
          open={open}
          handleClose={handleClose}
          {...selectedClass}
        />
      )}
    </main>
  );
}

export default Home;
