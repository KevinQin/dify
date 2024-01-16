"""add is_universal in apps

Revision ID: 2beac44e5f5f
Revises: d3d503a3471c
Create Date: 2023-07-07 12:11:29.156057

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2beac44e5f5f'
down_revision = 'a5b56fb053ef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('apps', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_universal', sa.Boolean(), server_default=sa.text('false'), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('apps', schema=None) as batch_op:
        batch_op.drop_column('is_universal')

    # ### end Alembic commands ###
