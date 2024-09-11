import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query couseList {
      courseLists {
        courseName
        banner {
          url
        }
        free
        id
        author
        totalChapters
        tag
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id) => {
  const query =
    gql`
    query course {
      courseList(where: { id: "` +
    id +
    `" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        description
        courseName
        id
        free
        totalChapters
        youtubeUrl
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
