// components/LandingPage.tsx
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CableIcon from '@mui/icons-material/Cable';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LanguageIcon from '@mui/icons-material/Language';
import RouteIcon from '@mui/icons-material/Route';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import StyleIcon from '@mui/icons-material/Style';
import { Container, Typography, Button, Paper, List, ListItem } from '@mui/material';
import { Fade, Slide, Zoom, Flip, AttentionSeeker } from 'react-awesome-reveal';

const skills: { label: string; icon: JSX.Element }[] = [
  { label: 'Formik', icon: <DynamicFormIcon color="primary" /> },
  { label: 'I18next', icon: <LanguageIcon color="primary" /> },
  { label: 'Redux Toolkit Query', icon: <CableIcon color="primary" /> },
  { label: 'NextAuth.js', icon: <SecurityIcon color="primary" /> },
  { label: 'MongoDB', icon: <StorageIcon color="primary" /> },
];

const additionalSkills: { label: string; icon: JSX.Element; secondIcon?: JSX.Element }[] = [
  { label: 'Material UI', icon: <StyleIcon color="primary" /> },
  { label: 'Project Structure', icon: <FolderIcon color="primary" /> },
  { label: 'NextAuth Providers', icon: <GoogleIcon color="primary" />, secondIcon: <GitHubIcon color="primary" /> },
  { label: 'NextAuth Credentials with DataBase', icon: <DataObjectIcon color="primary" /> },
  { label: 'API Routing', icon: <RouteIcon color="primary" /> },
];

export const LandingPage = () => {
  const animationDuration = 1400;

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Paper
        elevation={10}
        variant="elevation"
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
          marginTop: '30%',
          marginBottom: '30%',
        }}
      >
        <Fade triggerOnce duration={animationDuration}>
          <Typography variant="h2" align="center">
            Welcome to Animations Page
          </Typography>
        </Fade>
        <Zoom triggerOnce direction="down" duration={animationDuration} delay={animationDuration / 2}>
          <Typography variant="body1" align="center" fontWeight={600}>
            Discover the power of React Awesome Reveal and Material-UI.
          </Typography>
        </Zoom>
        <Zoom triggerOnce direction="down" duration={animationDuration} delay={animationDuration / 2}>
          <Button
            href="#start"
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={false}
            className="rounded-2xl"
          >
            Get Started
            <ArrowDownwardIcon color="primary" />
          </Button>
        </Zoom>
      </Paper>

      <Slide triggerOnce direction="up">
        <Paper id="start" elevation={10} variant="elevation" sx={{ p: 4 }}>
          <section>
            <Typography variant="h3" align="center">
              My Skill-up:
            </Typography>
            <List className="flex flex-col w-full  rounded-md shadow-lg">
              {skills.map(({ label, icon }, index) => (
                <Flip direction="horizontal" key={index} duration={animationDuration}>
                  <ListItem divider>
                    <Fade duration={animationDuration}>
                      <Typography className="flex justify-start gap-2 items-center">
                        Skill {index + 1}: {label}
                        {icon}
                      </Typography>
                    </Fade>
                  </ListItem>
                </Flip>
              ))}
            </List>
          </section>
        </Paper>
      </Slide>

      <Slide triggerOnce direction="right">
        <Paper elevation={10} variant="elevation" sx={{ p: 4 }}>
          <Typography variant="h3" align="center">
            Additional Skill-up:
          </Typography>
          <List className="flex flex-col w-full rounded-xl shadow-lg">
            {additionalSkills.map(({ label, icon, secondIcon }, index) => (
              <Flip direction="horizontal" key={index} duration={animationDuration}>
                <ListItem divider>
                  <Fade duration={animationDuration}>
                    <Typography className="flex justify-start gap-2 items-center">
                      Skill {index + 1}: {label}
                      {icon}
                      {secondIcon}
                    </Typography>
                  </Fade>
                </ListItem>
              </Flip>
            ))}
          </List>
        </Paper>
      </Slide>

      <Slide triggerOnce direction="down" duration={animationDuration}>
        <Paper elevation={10} variant="elevation" sx={{ p: 4 }}>
          <Typography variant="h3" align="center">
            My Project
          </Typography>
          <Fade duration={animationDuration}>
            <Typography variant="body1" align="center">
              I have experience with the following technologies in my project: i18next, Formik, Redux Toolkit, React
              Query, and NextAuth with MongoDB for user authentication and credential storage.
            </Typography>
          </Fade>
        </Paper>
      </Slide>

      <Slide triggerOnce direction="left" duration={animationDuration}>
        <Paper elevation={10} variant="elevation" sx={{ p: 4 }}>
          <AttentionSeeker effect="pulse" duration={animationDuration} delay={animationDuration}>
            <Typography variant="h3" align="center">
              Contact with Me <ConnectWithoutContactIcon color="primary" fontSize="large" />
            </Typography>
          </AttentionSeeker>
          <Fade duration={animationDuration}>
            <Typography variant="body1" align="center" fontWeight={500}>
              Feel free to get in touch with me at <b>ivanivakhnenko02@gmail.com</b> for any inquiries or collaboration
              opportunities.
            </Typography>
          </Fade>
        </Paper>
      </Slide>
    </Container>
  );
};
