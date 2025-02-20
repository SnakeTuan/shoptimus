import z from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { stores } from "@/server/db/schema";

export const storeRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, description, userId } = input;
      await ctx.db.insert(stores).values({ name, description, userId });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const stores = await ctx.db.query.stores.findMany();
    return stores;
  }),
});
