import Text from "@material-ui/core/Typography";

const Typography = (props) => {
  const { variant = "h1", children, ...rest } = props;
  return (
    <Text {...rest} variant={variant}>
      {children}
    </Text>
  );
};

export default Typography;
