import { useEffect, useState } from 'react';
import CourseLanding from './pages/CourseLanding';
import ApplicationSuccess from './pages/ApplicationSuccess';
import { courses } from './config/courses';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/application-success') {
    return <ApplicationSuccess />;
  }

  const courseSlug = currentPath.replace('/courses/', '').replace('/', '') || 'backend-sprint';
  const course = courses[courseSlug] || courses['backend-sprint'];

  return <CourseLanding course={course} />;
}

export default App;
