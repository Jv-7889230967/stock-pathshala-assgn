import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../utils/getliveClasses";
import Loader from "../components/Loader";

const Home = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  });

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
          data?.map((classItem) => {
            return (
              <section key={classItem.id} className="class-card">
                <img src={classItem.image} alt="class-image" height={'60%'} width={'95%'} />
                <div style={{ height: '100px', width: '95%', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{classItem.category.title}</p>
                  <p style={{ fontSize: '15px' }}>{classItem.start_datetime}</p>
                  <p style={{ fontWeight: 'bold' }}>By {classItem.teachers.name}</p>
                </div>
              </section>
            );
          })
        }
      </div>
    </main>
  );
}

export default Home;
