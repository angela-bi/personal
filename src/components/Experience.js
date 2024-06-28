import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import List from '@mui/material/List';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import Box from '@mui/material/Box';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
  import Link from '@mui/material/Link';
import { blue } from '@mui/material/colors';

const info = blue[700]

export const Experience = () => {
  return (
    <Container >
    <Typography variant='h4'> Experience </Typography>
    <Box >
        <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.2,},}}>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography> May 2024 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Software Engineering Intern </Typography>
                    <Typography color="textSecondary"> Adobe </Typography>
                    <List>
                        <Typography> Using Retrieval-Augmented Generation with knowledge graphs to improve SQL code summarization. </Typography>
                        <Typography variant='subtitle2' color="textSecondary"> Javascript, Java, Python, Langchain, OpenAI</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography> Jan 2024 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Research Assistant </Typography>
                    <Typography color="textSecondary"> PLAIT Lab, UC Berkeley </Typography>
                    <List>
                        <Typography> Learning under mentor Eric Rawn and professor Sarah Chasins. Currently researching manual and procedural tactics of creating art with p5.js. </Typography>
                        <Typography variant='subtitle2' color="textSecondary"> Javascript</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography>Sept 2022 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Teaching Assistant </Typography>
                    <Typography color="textSecondary"> UC Berkeley College of Computing, Data Science, and Society </Typography>
                    <List>
                        <Typography>Teaching bi-weekly discussions of 30+ students, facilitating office hours, creating and grading major projects/exams in introductory Python class <Link href='https://c88c.org/' color={info}>Computational Structures in Data Science</Link>.</Typography>
                        <Typography variant='subtitle2' color="textSecondary"> Python, SQL, Gradescope</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography>Jan 2022 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Projects Team Member, Senior Illustrator</Typography>
                    <Link href='https://www.dailycal.org/' color={info}> The Daily Californian </Link>
                    <List>
                        <Typography>Combining news reporting skills and data analytics to demonstrate the link between decreased ridership and lack of funding of BART.</Typography>
                        <Typography>Producing artwork for Arts, Editorial, and other departments on a weekly basis.</Typography>
                        <Typography variant='subtitle2' color="textSecondary"> Seaborn, Recharts, React.js</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography>March 2023 - Aug 2023</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Machine Learning Engineer Intern</Typography>
                    <Link href='https://arrepath.com/' color={info}> Arrepath </Link>
                    <List>
                        <Typography>Biotech startup utilizing machine learning for drug discovery.</Typography>
                        <Typography>Fully implemented and deployed model that predicts inhibition of heart function. Built data pipelines to improve efficient data retrieval fit into company's existing architecture.</Typography>
                        <Typography variant='subtitle2' color="textSecondary"> Scikit-learn, XGBoost, Amazon S3, MLFlow, Docker</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography>March 2022 - Aug 2022</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator> <TimelineDot/> <TimelineConnector/> </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'> Software Engineer Intern</Typography>
                    <Link href='https://www.nommenu.com/' color={info}> Nomify </Link>
                    <List>
                        <Typography>SaaS early-stage startup building AI-powered digital menus for restaurants.</Typography>
                        <Typography>Fully designed and implemented table of contents in and search bar, facilitating customer navigation and improving menu organization.</Typography>
                        <Typography variant='subtitle2' color="textSecondary"> React.js, GraphQL, Postman, HTML/CSS</Typography>
                    </List>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </Box>
  </Container>
  )
}

export default Experience