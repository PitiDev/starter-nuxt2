const head = title => {
    return {
      title: title,
      meta: [
        { charset: "utf-8" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          hid: "fb:app_id",
          name: "fb:app_id",
          content: "794543674387411"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Hello world"
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://devlamedia.com/"
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://devlamedia.com/"
        },
        {
          hid: "og:image:width",
          name: "og:image:width",
          content: "1200"
        },
        {
          hid: "og:image:height",
          name: "og:image:height",
          content: "630"
        },
        {
          hid: "og:description",
          name: "og:description"
        }
      ]
    };
  };
  
  const teacher = () => {
    return [
      { text: "no", value: "index" },
      { text: "profile", value: "teacherAvatar" },
      { text: "name", value: "name" },
      { text: "email", value: "email" },
      { text: "phone", value: "phone" },
      { text: "group", value: "commission_id.group" },
      { text: "commission", value: "commission_id.commission" },
      { text: "time", value: "created_at" },
      { text: "status", value: "statusTeacher" },
      { text: "actions", value: "actions" }
    ];
  };
  
  const role = () => {
    return [
      { text: "No", value: "index" },
      { text: "number", value: "role_number" },
      { text: "Name", value: "name" },
      { text: "desc", value: "desc" },
      { text: "Time", value: "created_at" },
      { text: "actions", value: "actions" }
    ];
  };
  
  const adminHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "profile", value: "adminAvatar" },
      { text: "Name", value: "name" },
      { text: "email", value: "email" },
      { text: "phone", value: "phone" },
      { text: "Status", value: "admin_role_id.name" },
      { text: "Time", value: "created_at" },
      { text: "actions", value: "actions" }
    ];
  };
  const commissionHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "group", value: "group" },
      { text: "commission", value: "commission" },
      { text: "detail", value: "detail" },
      { text: "Time", value: "created_at" },
      { text: "actions", value: "actions" }
    ];
  };
  const categoryHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "images", value: "imgCategory" },
      { text: "number", value: "numeric" },
      { text: "english name ", value: "en" },
      { text: "lao name ", value: "la" },
      { text: "status", value: "is_active" },
      { text: "actions", value: "actions" }
    ];
  };
  const hireHead = () => {
    return [
      { text: "No", value: "index" },
      { text: "Avatar", value: "avatar" },
      { text: "Name", value: "name" },
      { text: "email", value: "email" },
      { text: "Status", value: "status" },
      { text: "Time", value: "created_at" }
    ];
  };
  
  const bannerHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "images", value: "img_banner" },
      { text: "title", value: "title" },
      { text: "start_date ", value: "start_date" },
      { text: "end_date ", value: "end_date" },
      { text: "actions", value: "actions" }
    ];
  };
  
  const courseHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "image", value: "imgCourse" },
      { text: "name", value: "name" },
      { text: "category", value: "categories_id.la" },
      { text: "teacher", value: "teacher_id.name" },
      { text: "price ", value: "price" },
      { text: "lesson ", value: "lesson_count" },
      { text: "video ", value: "video_count" },
      { text: "com", value: "commission" },
      { text: "manage", value: "manageCourse" },
      { text: "actions", value: "actions" }
    ];
  };
  
  const bankHeader = () => {
    return [
      { text: "No", value: "index" },
      { text: "logo ", value: "bankLogo" },
      { text: "name in lao", value: "name_la" },
      { text: "name in english", value: "name_en" },
      { text: "account", value: "account_name" },
      { text: "account NO", value: "account_number" },
      { text: "Time", value: "created_at" },
      { text: "actions", value: "actions" }
    ];
  };
  export {
    head,
    teacher,
    role,
    adminHeader,
    commissionHeader,
    categoryHeader,
    hireHead,
    bannerHeader,
    courseHeader,
    bankHeader
  };