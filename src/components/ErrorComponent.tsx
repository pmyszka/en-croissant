import {
  Anchor,
  Button,
  Code,
  CopyButton,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";

export default function ErrorComponent({
  error,
}: {
  error: any;
}) {
  const navigate = useNavigate();

  return (
    <Stack p="md">
      <Title>An error ocurred</Title>
      {error instanceof Error && (
        <>
          <Text>
            <b>{error.name}:</b> {error.message}
          </Text>
          <Code>{error.stack}</Code>
          {error.cause}
        </>
      )}
      <Group>
        {error instanceof Error && (
          <CopyButton value={`${error.message}\n${error.stack}`}>
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : undefined} onClick={copy}>
                {copied ? "Copied" : "Copy stack strace"}
              </Button>
            )}
          </CopyButton>
        )}
        <Button
          onClick={() =>
            navigate({ to: "/" }).then(() => window.location.reload())
          }
        >
          Reload
        </Button>
      </Group>

      <Text>
        Please report this on{" "}
        <Anchor
          href="https://github.com/franciscoBSalgueiro/en-croissant/issues/new?assignees=&labels=bug&projects=&template=bug.yml"
          target="_blank"
        >
          Github
        </Anchor>{" "}
        or on the{" "}
        <Anchor href="https://discord.com/invite/tdYzfDbSSW" target="_blank">
          Discord server
        </Anchor>
      </Text>
    </Stack>
  );
}
