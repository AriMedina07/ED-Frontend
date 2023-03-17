import React from 'react';
import HeaderStudents from './Header';
import TeachersList from './TeachersList';
import FooterStudents from './FooterStudents';

const AppStudents = () => (
   <React.Fragment>
      <HeaderStudents />
      <TeachersList />
      <FooterStudents />
   </React.Fragment>
);

export default AppStudents;
