import React from 'react'
import CareerCard from '@/components/careerCard'

const Career = () => {
  return (
    <div >
      <CareerCard
        companyName="Tech Company"
        roleName="Software Engineer"
        startDate="January 2020"
        endDate="December 2021"
        description="Worked on developing and maintaining web applications using React, TypeScript, and Node.js."
        skills={['Web development', 'Time managementand deadline adherence', 'Team work']}
      />
    </div>
  )
}

export default Career