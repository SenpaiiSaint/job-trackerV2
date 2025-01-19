import React, { useState } from 'react'
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  Avatar,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  IconButton,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  Save as SaveIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material'

function Settings() {
  // Example states for toggles / inputs
  const [darkMode, setDarkMode] = useState(false)
  const [notificationEnabled, setNotificationEnabled] = useState(true)
  const [volume, setVolume] = useState(70)
  const [language, setLanguage] = useState('en')

  // Profile data
  const [displayName, setDisplayName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [password, setPassword] = useState('')

  const handleDarkModeToggle = () => {
    setDarkMode((prev) => !prev)
  }

  const handleNotificationToggle = () => {
    setNotificationEnabled((prev) => !prev)
  }

  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue)
  }

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  const handleSaveProfile = () => {
    // Perform save logic
    alert(`Profile saved!\nName: ${displayName}\nEmail: ${email}`)
  }

  const handleSaveAccount = () => {
    // Perform account save logic (like password change)
    alert(`Account updated!\nNew password: ${password ? '********' : '(unchanged)'}`)
  }

  const handleSaveNotifications = () => {
    // Perform notifications save logic
    alert(`Notifications updated!\nEnabled: ${notificationEnabled}\nVolume: ${volume}`)
  }

  const handleSaveTheme = () => {
    // Perform theme save logic
    alert(`Theme set to: ${darkMode ? 'Dark' : 'Light'}`)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Settings
      </Typography>

      {/* Profile Settings */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <PersonIcon />
            <Typography variant="h6">Profile</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} display="flex" justifyContent="center" alignItems="center">
                <Avatar
                  sx={{ width: 72, height: 72 }}
                  alt="User Avatar"
                  src="" // Supply a real image source if desired
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box display="flex" flexDirection="column" gap={2}>
                  <TextField
                    label="Display Name"
                    variant="outlined"
                    fullWidth
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1 }} />,
                    }}
                  />
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1 }} />,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSaveProfile}
          >
            Save Profile
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Account Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <LockIcon />
            <Typography variant="h6">Account</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Change your password here:
            </Typography>
            <TextField
              type="password"
              label="New Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Paper>
          <Button
            variant="contained"
            color="success"
            startIcon={<SaveIcon />}
            onClick={handleSaveAccount}
          >
            Update Account
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Notification Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <NotificationsIcon />
            <Typography variant="h6">Notifications</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography>Enable Notifications</Typography>
              <Switch
                checked={notificationEnabled}
                onChange={handleNotificationToggle}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography gutterBottom>Notification Volume</Typography>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="notification-volume"
              min={0}
              max={100}
              valueLabelDisplay="auto"
            />
          </Paper>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSaveNotifications}
          >
            Save Notification Settings
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Theme Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            <Typography variant="h6">Theme</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography>Dark Mode</Typography>
              <Switch checked={darkMode} onChange={handleDarkModeToggle} />
            </Box>
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            startIcon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            onClick={handleSaveTheme}
          >
            Apply Theme
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Language Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="language-label">Select Language</InputLabel>
              <Select
                labelId="language-label"
                label="Select Language"
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="de">German</MenuItem>
                <MenuItem value="zh">Chinese</MenuItem>
              </Select>
            </FormControl>
          </Paper>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => alert(`Language changed to: ${language}`)}
          >
            Save Language
          </Button>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default Settings
