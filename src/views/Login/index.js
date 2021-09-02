import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { Link as RouterLink, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../auth/contexts/AuthProvider";
// import BoxedLayout from "../../core/components/BoxedLayout";
// import { useSnackbar } from "../../core/contexts/SnackbarProvider";

const Login = () => {
  const { login, isLoggingIn } = useAuth();

  // const navigate = useNavigate();
  // const snackbar = useSnackbar();

  const handleLogin = async (email, password) => {
    const res = await login(email, password);
    console.log(res)
    if (res.status == 200) {
      console.log(res.status);
      <Redirect to="/" />;
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("e").required("e"),
      password: Yup.string("e").min(3, "3").required("r"),
    }),
    onSubmit: async (values) => {
      handleLogin(values.email, values.password);
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./img/startup.svg)",
          backgroundRepeat: "no-repeat",
          bgcolor: "background.default",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Typography component="h1" variant="h5">
          {"t"}
        </Typography>
        <Box
          component="form"
          marginTop={3}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={"email"}
            name="email"
            autoComplete="email"
            autoFocus
            disabled={isLoggingIn}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={"A"}
            type="password"
            id="password"
            autoComplete="current-password"
            disabled={isLoggingIn}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box sx={{ textAlign: "right" }}>
            <Link
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/forgot-password`}
              variant="body2"
            >
              {"Aaa"}
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            loading={isLoggingIn}
            variant="contained"
            sx={{ mt: 3 }}
          >
            {"aa"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
