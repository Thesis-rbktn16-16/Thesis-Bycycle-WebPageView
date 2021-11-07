import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function BootstrapTest() {
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`Click-positioned-${placement}`}>
              <Popover.Header as="h3">{`Click ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>ekri baskla brasssss</strong> ommmekkkk.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default BootstrapTest;
