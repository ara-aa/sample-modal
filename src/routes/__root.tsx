import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {
  Divider,
  Stack,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
} from '@mui/material'

export const Route = createRootRoute({
  component: () => (
    <>
      <Stack direction='row' spacing={2}>
        <Paper sx={{ width: 320 }}>
          <MenuList dense>
            <MenuItem>
              <ListItemText inset>
                <Link to='/'>Home</Link>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText inset>
                <Link to='/modals'>modal1</Link>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
        <Outlet />
      </Stack>
      <TanStackRouterDevtools />
    </>
  ),
})
