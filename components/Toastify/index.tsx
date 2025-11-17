import { Slide, toast, type ToastOptions } from "react-toastify";

const defaultToastOptions: ToastOptions = {
  position: "top-center",
  transition: Slide,
};

type ToastType = "info" | "error";

export const Toastify = ({
  content,
}: {
  content: string;
  type: ToastType;
}) => {
  const toastConfig = {
    ...defaultToastOptions,
  };

  const message = () => (
    <pre
      style={{
        margin: 0,
        fontFamily: "inherit",
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </pre>
  );

  toast.info(message, toastConfig);
};
