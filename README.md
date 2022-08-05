pnpm monorepo project.

# install
pnpm install

# run script
pnpm dev:a

# 将 dayjs 包单独安装进 @test/a 这个子 package 下
pnpm i dayjs -r --filter @test/a