import React from 'react'
import CareerCard from '@/components/careerCard'

const Career = () => {
  return (
    <div className='flex flex-col gap-6'> 
      <CareerCard
        companyName="TrueBlue"
        roleName="Software Engineer"
        startDate="February 2022"
        endDate="Present"
        description="Worked on developing and maintaining proprietary CRM using TypeScript, JavaScript, SQL and Node.js."
        skills={['Web development', 'Time managementand deadline adherence', 'Team work']}
      />
    </div>
  )
}

export default Career