import React from 'react'
import HomePage from './pages/HomePage';
import { Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import JobPage from './pages/JobPage';
import NotFounfPage from './pages/NotFounfPage';
import JobsPage , {jobLoader} from './pages/JobsPage';
import AddjobPage from './pages/AddjobPage';



const App = () => {
  const addJob = (newJob) => {
  console.log(newJob)

}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element = {<HomePage/>} />
      <Route path ='/jobs' element = {<JobPage/>} />
      <Route path ='/add-job' element = {<AddjobPage addJobSubmit={addJob}/>} />
      <Route path ='/jobs/:id' element = {<JobsPage/>}  loader={jobLoader}/>
      <Route path ='*' element = {<NotFounfPage/>} />




    </Route>
  )
); 
  return <RouterProvider router={router} />;
};

export default App