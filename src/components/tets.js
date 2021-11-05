<Modal
  title='Basic Modal'
  visible={ModalVisible}
  onOk={this.handleOk}
  onCancel={this.closeModal}
>
  <Form {...formItemLayout}>
    <Form.Item
      label='Name'
      name='name'
      initialValue={user.name}
      rules={[{ required: true, message: "This field is required" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label='Email'
      name='email'
      initialValue={user.email}
      rules={[
        {
          required: true,
          message: "This field is required",
        },
        {
          type: "email",
          message: "Invalid email",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label='Phone'
      name='phone'
      initialValue={user.phone}
      rules={[{ required: true, message: "This field is required" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label='Website'
      name='website'
      initialValue={user.website}
      rules={[{ required: true, message: "This field is required" }]}
    >
      <Input />
    </Form.Item>
  </Form>
</Modal>;
