import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import * as Yup from "yup";

type ItemDialogProps = {
  onAdd: (values: any) => void;
  onClose: () => void;
  onUpdate: (data: any) => void;
  open: boolean;
  processing: boolean;
  item?: any;
};

const ItemDialog = ({
  onAdd,
  onClose,
  onUpdate,
  open,
  processing,
  item,
}: ItemDialogProps) => {
  const editMode = Boolean(item && item.Code);
  const [value, setValue] = useState('');
  const handleSubmit = (values: any) => {
    if (item && item.Code) {
      onUpdate({ ...values, id: item.Code } as any);
    } else {
      onAdd(values);
    }
  };
  const formik = useFormik({
    initialValues: {
      Name: item ? item.Name : "",
      Desc: item ? item.Desc : "",
      Icon: item ? item.Icon : "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Harus Disisi"),
      Desc: Yup.string().required("Harus Disisi"),
      Icon: Yup.string().required("Harus Disisi"),
    }),
    onSubmit: handleSubmit,
  });
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      aria-labelledby="user-dialog-title"
    >
      <form onSubmit={formik.handleSubmit} noValidate>
        <DialogTitle id="user-dialog-title">
          {editMode ? "Edit" : "Tambah"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            required
            fullWidth
            id="code-name"
            label={"Name"}
            name="Name"
            autoComplete="family-name"
            disabled={processing}
            value={formik.values.Name}
            onChange={formik.handleChange}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
          />
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{"Cancel"}</Button>
          <Button
            disabled={processing}
            color="primary"
            type="submit"
            variant="contained"
          >
            {editMode ? "Edit" : "Tambah"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ItemDialog;
