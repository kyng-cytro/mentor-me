import { Prisma } from "@prisma/client";
import prisma_client from "~/lib/prisma";

const prisma = prisma_client;

export default eventHandler(async (event) => {
  const {
    query,
    categories,
    ratings,
    asc,
    take,
  }: {
    query: string;
    categories: string;
    ratings: string;
    asc: boolean;
    take: string;
  } = getQuery(event);

  const filteredMentors: Prisma.MentorWhereInput = {};

  // NOTE: filters by query
  if (query) {
    filteredMentors.OR = [
      {
        user: {
          name: {
            search: query,
          },
        },
      },
      {
        currentTitle: {
          search: query,
        },
      },

      {
        companyName: {
          search: query,
        },
      },
    ];
  }

  // NOTE: filters by categories
  if (categories) {
    filteredMentors.fieldOfExpertise = { in: categories };
  }

  // NOTE: filters by ratings
  if (ratings) {
    //NOTE: this is sneaky
    const itemsString = ratings.toString();
    const itemsArray = itemsString.split(",");

    filteredMentors.rating = { in: itemsArray.map((rating) => Number(rating)) };
  }

  try {
    // NOTE: get total count
    const total = await prisma.mentor.count({
      where: filteredMentors,
    });

    // NOTE: then get mentors
    const mentors = await prisma.mentor.findMany({
      where: filteredMentors,
      include: { user: true },
      take: Number(take) ?? undefined,
      orderBy: { user: { name: asc ? "asc" : "desc" } },
    });

    return { total, mentors };
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
