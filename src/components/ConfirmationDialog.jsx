import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

export const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              <Icon as={MdCancel} boxSize={[5, 5, 6]} mr={[0, 0, 2]} />
              <Text display={["none", "none", "block"]}>Cancelar</Text>
            </Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              <Icon as={MdCheckCircle} boxSize={[5, 5, 6]} mr={[0, 0, 2]} />
              <Text display={["none", "none", "block"]}>Confirmar</Text>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
